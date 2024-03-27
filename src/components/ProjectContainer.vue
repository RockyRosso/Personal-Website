<template>
    <div>
        <div
            v-if="projects.length > 0"
            :class="i === 0 ? 'scroll-anim-reveal' : 'scroll-anim'"
            v-for="(project, i) in projects"
        >
            <h1>{{ project.name }}</h1>

            <div>
                <div
                    v-for="video in project.videos"
                    class="container-videoplayer"
                    style="margin-bottom: 20px"
                >
                    <videoPlayer :src="video" />
                </div>
            </div>

            <p>{{ project.info }}</p>

            <hr v-if="i + 1 !== projects.length" />
        </div>

        <h1 v-if="projects.length === 0">Loading Projects...</h1>
    </div>
</template>

<script lang="ts">
import InfoContainer from './InfoContainer.vue';
import videoPlayer from './videoPlayer.vue';

import config from '../config';

export default {
    data() {
        return {
            projects: [] as any[],
        };
    },

    components: {
        InfoContainer,
        videoPlayer,
    },

    methods: {
        async loadProjects() {
            const result = await fetch(config.apiBase + '/projects', {
                method: 'GET',
            });

            const projects = await result.json();

            this.projects = projects;
        },
    },

    mounted() {
        this.loadProjects();
    },
};
</script>
