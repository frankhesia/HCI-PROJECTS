<script>
        const lights = ["red", "yellow", "green"];
        const times = [9000, 6000, 9000]; // Red: 9s, Yellow: 6s, Green: 9s
        let currentIndex = 0;

        function changeLight() {
            lights.forEach(light => document.getElementById(light).style.backgroundColor = "gray")
        }document.getElementById(lights[currentIndex]).style.backgroundColor = lights[currentIndex];
            setTimeout(changeLight, times[currentIndex]);
            currentIndex = (currentIndex + 1) % lights.length;
        
        changeLight();
    </script>