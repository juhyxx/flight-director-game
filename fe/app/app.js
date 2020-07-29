class App {
    #container = undefined
    #context = undefined
    #size = 500

    constructor(container){
        this.#container = container

        let canvas = document.createElement('canvas');

        canvas.width = this.#size
        canvas.height = this.#size
        canvas.style.border="5px solid gray"
        canvas.style.backgroundColor="black"
        container.appendChild(canvas)
        this.#context= canvas.getContext('2d');
    }
    run() {
        this.draw()
    }

    draw() {
        let ctx = this.#context
        var time = new Date();
        ctx.globalCompositeOperation = 'destination-over';
        ctx.clearRect(0, 0, this.#size, this.#size);
        ctx.fillStyle = 'rgba(255, 255, 0, 1)';
        ctx.font = "20px monospace";        
        ctx.save();

        ctx.fillStyle = 'rgba(0, 255, 0, 1)';
        ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
        
        //clocl
        let timeFormated = `${("0" + time.getHours()).slice(-2)}:${("0" + time.getMinutes()).slice(-2)}:${("0" + time.getSeconds()).slice(-2)}` 
        ctx.fillText( timeFormated, 10, this.#size-10);

        ctx.fillRect(10,10,2,2);
        
        ctx.restore();
        window.requestAnimationFrame(()=>{this.draw()});
    }
    
}

export default App