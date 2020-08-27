<template>
    <div class="projDiv">
        <h1>My Project</h1>
        <div class="todo">
            <input type="text" v-model="text">
            <button @click="add" v-if="arr.length <= 10">Add todo</button>
            <ul>
                <li v-for="(item, i) in arr" :key="i">
                    <span>{{item}}</span>
                    <button @click="remove(i)">Delete</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyProject',
    data() {
        return {
            text: '',
            arr: []
        }
    },
    methods: {
        add() {
            this.arr.push(this.text);
            this.text = ''
        },

        remove(i) {
            this.arr.splice(i, 1)
        }
    }
}
</script>

<style>
    .projDiv {
        text-align: center;
        padding-top: 20px;
    }
    .todo ul {
        list-style: none;
    }
</style>