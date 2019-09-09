import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue(
    {el: "#app",
    data: {
      tasks: [
        {name: "walk the dog", priority: "high"},
        {name: "mow the lawn", priority: "low"},
      ],
      newTask: "" //{name: "", priority: ""}
    },
    methods: {
      saveNewTask: function () {
        // if (this.newTask !== "") { }
        // this.tasks.push({name: this.newTask.name, priority: this.newTask.priority});
        this.tasks.push({name: this.newTask.name, priority: "low"}) ;
        this.newTask = ""
      },

    }
  })




})
