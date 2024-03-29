<template>
    <form @submit="submit">
        <div class="form-input">
            <label class="form-label">Email</label>
            <input v-model="email" class="form-input" type="email" required />
        </div>

        <div class="form-input">
            <label class="form-label">Name</label>
            <input v-model="name" class="form-input" type="text" required />
        </div>

        <div class="form-input">
            <label class="form-label">Message</label>
            <textarea maxlength="5000" v-model="message" class="form-input" required></textarea>
        </div>

        <button :disabled="submitting" data-btn-style="success">Submit</button>

        <div>
            <p v-if="submitted" class="nomargin form-submit-status" data-text-style="success">Form Submitted!</p>
        </div>
    </form>
</template>

<style lang="scss">

@import '../assets/styles/base.scss';

form {
    @include form(600px);
}

</style>

<script lang="ts">

import config from '../config';

export default {
    data() {
        return {
            email: '',
            name: '',
            message: '',

            submitting: false,
            submitted: false
        }
    },

    methods: {
        setStatus(status: 'fail' | 'success') {
            const statusText = $('.form-submit-status');

            this.submitted = true;
            
            if (status === 'fail') {
                statusText.attr('data-text-style', 'danger');
                statusText.text('Failed to submit form!');

                return;
            }

            statusText.attr('data-text-style', 'success');
            statusText.text('Form submitted!');
        },

        async submit(event: Event) {
            event.preventDefault();

            const email = this.email;
            const name = this.name;
            const message = this.message;

            this.submitting = true;

            const result = await fetch(config.apiBase + '/contact', {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    email,
                    name,
                    message
                })
            });
            
            if (result.status === 200) {
                this.setStatus('success');
                
                setTimeout(() => {
                    window.location.reload();
                }, 1000);

                return;
            }

            this.setStatus('fail');
            this.submitting = false;
        }
    }
}

</script>