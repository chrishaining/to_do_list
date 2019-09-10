import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue(
    {el: "#app",
    data: {
      tasks: [
        // "walk the dog", "mow the lawn"
        {name: "walk the dog", priority: "high"},
        {name: "mow the lawn", priority: "low"}
      ],
      newTask: {name: "", priority: "low"}
    },
    methods: {
      saveNewTask: function () {
        // if (this.newTask !== "") { }
        // this.tasks.push({name: this.newTask.name, priority: this.newTask.priority});
        // this.tasks.push(name: this.newTask.name}) ;
        // this.tasks.push({name: this.newTask.name, priority: "low"});
        this.tasks.push(this.newTask);

        this.newTask = {name: "", priority: "low"}
      },

    }
  })




})
