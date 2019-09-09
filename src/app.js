import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue(
    {el: "#app",
    data: {
      tasks: [
        {name: "walk the dog", priority: "high"},
        {name: "mow the lawn", priority: "low"},
      ],
      newTask: ""
    },
    methods: {
      saveNewTask: function () {
        this.tasks.push({name: this.newTask, priority: "low"});
        this.newTask = ""
      },

    }
  })


})
