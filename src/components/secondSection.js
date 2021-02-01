import React from "react"
import Analsys from "../functions/analsys"
let SecondSection = ({data,clas=""}) => {
    let a = new Analsys
    let [bool,setBool] = React.useState(true)
    let result = {
        wordscount:a.wordCount(data),
        sentencecount:a.sentenceCount(data),
        longestwords:a.longestWord(data),
        shortestwords:a.shortestWord(data),
        mostRepeatedWord:a.mostRepeatedWord(data),
        readingTime:a.readingTime(data),
        isSentencesLong:a.isSentenceLong(data),
        punctuationMarks:a.punctuationMarks(data),
        readabilityRate: a.readabilityRate(data)
    }
    React.useEffect(() => {
         if(clas){
            document.getElementById("card").classList.remove("cards")
            document.getElementById("card").classList.add("removeCards")
            setTimeout(() => {
               setBool(true)
            }, 1500);
         }else if(clas==false){
            setBool(false)
            setTimeout(() => {
               document.getElementById("card").classList.remove("removeCards")
               document.getElementById("card").classList.add("cards")
            },1500)
         }else{
            setBool(true)
         }
    },[clas])
    const DataList = ({result}) => {
        return(
         <div id="card" className="d-flex flex-wrap cards align-items-stretch mt-5 justify-content-center align-items-center">
            <div  className="card text-center mb-3  mr-3 " style={{width:"200px",height:"200px", backgroundColor:"#fee715ff"}}>
               <div className="card-header">Kelime Sayısı</div>
               <div className="card-body">
                  <h1 className="card-text">{result.wordscount}</h1>
               </div>
            </div>
            <div className="card text-center mb-3 mr-3 " style={{width:"200px",height:"200px", backgroundColor:"#fee715ff"}}>
               <div className="card-header">Cümle Sayısı</div>
               <div className="card-body">
                  <h1 className="card-text">{result.sentencecount}</h1>
               </div>
            </div>
            <div className="card text-center mb-3 mr-3" style={{width:"200px",minHeight:"200px", backgroundColor:"#fee715ff"}} >
               <div className="card-header">En uzun kelimeler</div>
               <div className="card-body">
                  {result.longestwords.map((e,i) => {
                  return <p key={i} class="card-text"><span style={{borderRadius:5}} className="p-2 text-white bg-dark">{e}</span></p>
                  })}
               </div>
            </div>
            <div className="card text-center mb-3 mr-3 " style={{width:"200px",minHeight:"200px", backgroundColor:"#fee715ff"}} >
               <div className="card-header">En kısa kelimeler</div>
               <div className="card-body">
                  {result.shortestwords.map((e,i) => {
                  return <p key={i} class="card-text"><span style={{borderRadius:5}} className="p-2 text-white bg-dark">{e}</span></p>
                  })}
               </div>
            </div>
            <div className="card text-center mb-3 mr-3" style={{width:"200px",minHeight:"200px", backgroundColor:"#fee715ff"}} >
               <div className="card-header">Tekrar eden kelimeler</div>
               <div className="card-body">
               {result.mostRepeatedWord[0].length == 1 ? 
                  <span style={{borderRadius:5}} className="p-2 text-white bg-dark">Bulunamadı</span>
                  :
                  <div>
                  {result.mostRepeatedWord[0].map((e,i) => {
                     return <p key={i} class="card-text"><span style={{borderRadius:5}} className="p-2 text-white bg-dark">{e}</span></p>
                  })}
                  <p className="card-text">Tekrar sayısı: {result.mostRepeatedWord[1]}</p>
                  </div>
               }   
               </div>
            </div>
            <div className="card text-center mb-3 mr-3" style={{width:"200px",height:"200px", backgroundColor:"#fee715ff"}} >
               <div className="card-header">Okuma süresi</div>
               <div className="card-body">
                  <h1 className="card-text">~{result.readingTime} dakika</h1>
               </div>
            </div>
            <div className="card text-center mb-3 mr-3" style={{width:"200px",height:"200px", backgroundColor:"#fee715ff"}}>
               <div className="card-header">Cümle uzunluğu (ortalama)</div>
               <div className="card-body">
                  <h1 className="card-text">{result.isSentencesLong}</h1>
               </div>
            </div>
            <div className="card text-center mb-3 mr-3" style={{width:"200px",minHeight:"200px", backgroundColor:"#fee715ff"}}>
               <div className="card-header">Noktalama İşaretleri</div>
               <div className="card-body">
                  {result.punctuationMarks[0].length == 0 ? 
                  <span style={{borderRadius:5}} className="p-2 text-white bg-dark">Bulunamadı</span>
                  :
                  result.punctuationMarks[0].map((e,i) => {
                     return <p key={i} class="card-text"><span style={{borderRadius:5}} className="p-2 text-white bg-dark">{e}</span> : {result.punctuationMarks[1][i]}</p>
                  })
                  }
               </div>
            </div>
            <div className="card text-center mb-3 " style={{width:"200px",height:"200px", backgroundColor:"#fee715ff"}}>
               <div className="card-header">Seviye</div>
               <div className="card-body">
                  <h1 className="card-text">{result.readabilityRate}</h1>
               </div>
            </div>
         </div>
        )
    }
    return(
        <div>
            {bool ?
              <div class="p-3 mb-4">
               <div class="d-flex align-items-center justify-content-center text-white" style={{height:"50vh"}}>
                <div class="anim-typewriter textWaiting">Metin bekleniyor...</div>
              </div>
            </div>
        
            :
                <DataList result={result} /> 
            }
        </div>
    )
}
export default SecondSection