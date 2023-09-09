class Log{
    list = [];

    constructor(listEl) {
        this.listEl = listEl;
    }

    addMessage(msg) {
        this.list.push(msg);
        this.render();
    }

    clearMessageonReset() {
        this.list = [];
        this.render();
    }

    render() {
        this.listEl.innerHTML = '';

        for (let i in this.list) {
            this.listEl.innerHTML += `<li>${this.list[i]}</li>`;
        }
    }
  }
