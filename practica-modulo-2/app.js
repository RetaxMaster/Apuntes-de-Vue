new Vue({

    el: "#app",

    data() {

        return {

            courses: [],
            title: "",
            time: ""

        }

    },

    methods: {

        addCourse() {

            const title = this.title;
            const time = this.time;
            this.courses.push({title, time});
            this.title = "";
            this.time = "";

        }

    },

    computed: {

        totalTime() {

            let time = 0;
            const courses = this.courses;

            for (const course of courses)
                time += parseFloat(course.time);

            return time;

        }

    }


});