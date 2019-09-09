import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue(
    {el: "#app",
    data: {
      tasks: [
        {name: "walk the dog"},
        {name: "mow the lawn"},
      ],
      newTask: ""
    },
    methods: {
      saveNewTask: function () {
        // if (this.newTask !== "") { }
        // this.tasks.push({name: this.newTask.name, priority: this.newTask.priority});
        this.tasks.push({name: this.newTask.name}) ;
        this.newTask = ""
      },

    }
  })




})
