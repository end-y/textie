import React from "react"
let AnimLetter = () => {
    let myRef = [];
    let letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    let bgAnim = (ref,el) => {
        var body = document.body,
        html = document.documentElement;
    
        var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight )
        let random = (sayi,sinir) => {
            return Math.random()*sayi +sinir
        }
        const randoms = []
        for(let i= 0; i<ref.length; i++){
            let sayi = random(document.body.clientWidth-100,1)
            let sayi3 = random(25,20)
            randoms.push([sayi,sayi3])
        }
        for(let i= 0; i<el.length; i++){
            el[i].style.right = randoms[i][0]+"px"
            el[i].style.fontSize = randoms[i][1]+"px"
            el[i].style.animationDelay = 1*i+"s"
            el[i].animate([
            { transform: 'translateY(-100px) rotate(20deg)' },
            { transform: `translateY(${height-100}px) rotate(360deg)`}
            ], {
            duration: 10000,
            iterations: Infinity,
            delay:1000*i
            });
        }
    }
    React.useEffect(() => {
        bgAnim(letters,myRef)
    })
    return(
      <div className="letters">
        {letters.map((e,i) => {
          return <span key={i} ref={(ctx) => myRef.push(ctx)} className="letter">{e}</span>
        })}
    </div>
    )
  }

export default AnimLetter