        let game=JSON.parse(localStorage.getItem('key'));	
         
        let reset=()=>{game.cwin=0,game.hwin=0;
            
            const elementresh = document.querySelector(".htext");
			const elementresc = document.querySelector(".ctext");
			
			elementresh.innerHTML=`${game.hwin}`;
			elementresc.innerHTML=`${game.cwin}`;
        }

            let elementresh = document.querySelector(".htext");
			let elementresc = document.querySelector(".ctext");
			
			elementresh.innerHTML=`${game.hwin}`;
			elementresc.innerHTML=`${game.cwin}`;

		function checker(c, u) {
			if (u == c) return "tie";

			if (u == "scissor" && c == "paper") return "win";
			else if (u == "scissor") return "lose";

			if (u == "rock" && c == "paper") return "lose";
			else if (u == "rock") return "win";

			if (u == "paper" && c == "rock") return "win";
			else if (u == "paper") return "lose";
		}

		const computermove = () => {
			let k = Math.random();
			if (k < 1 / 3) return "rock";
			else if (k < 2 / 3) return "paper";
			else return "scissor";
		};

		function ansshower(ans) {
			console.log("hello");
			const movesElement = document.querySelector(".move-chossen");
			movesElement.innerHTML = `
            <img src="images/${ans}.png" alt="">  
            `;
		}

        let flag=1;
        let intid;

		function autoplay(){
           let elementchange=document.querySelector('.autoplay');
           if(flag){
           	elementchange.innerHTML="Auto play Enabled";
           	intid=setInterval(() => {
			rollstart(computermove());
			}, 1000);
			flag=0;

           }
           else{
           	elementchange.innerHTML="Auto play Disabled";
             flag=1;
             clearInterval(intid);
           }
		}

		function shower(ans, input, cmove) {
			const movesElement = document.querySelector(".move-chossen");

			let k;
			if (ans == "win") k = input;
			else if (ans == "lose") k = cmove;
			else k = "tie";

		 movesElement.innerHTML = `
         <img class="intothumbs" src="images/${input}.png">
         <img class="intothumbs" src="images/${cmove}.png">
         `;
		}

		function resultupdater(ans) {
            
			if (ans === "win") {
				game.hwin++;
			} else if (ans === "lose") {
				game.cwin++;
			} 
            
            let store=JSON.stringify(game); 
            localStorage.setItem('key',store);
             
            update(); 
			const elementdisp = document.querySelector(".resdisplay");
			if (ans != "Game ties")
				elementdisp.innerHTML = `<p class="disp">you ${ans}</p> `;
			else elementdisp.innerHTML = `<p class="disp">Tie</p> `;
		}
           
            function update() {
            	let elementresh = document.querySelector(".htext");
			let elementresc = document.querySelector(".ctext");
			
			elementresh.innerHTML=`${game.hwin}`;
			elementresc.innerHTML=`${game.cwin}`;

            }
		    

		let rollstart = (input) => {
			let cmove = computermove();
			let ans = checker(cmove, input);
			shower(ans, input, cmove);
			resultupdater(ans);
		};