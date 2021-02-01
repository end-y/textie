class Analsys{
    constructor(data){
        this.data = data
    }
    wordCount = (data) => data.replace(/\s+$/, '').split(/\s+/).length
    
    sentenceCount=(data) => data.replace(/\s/g,'').split(/[.!?\\]/).length
    
    longestWord = (data) => {
        let a = data.split(/\s+/).map(e => e.toLowerCase().replace(/[.?,\/#!$%\^&\*;:{}=\-_`"~()]/g, ""));
        let b = a.map(e => e.length)
        let n = Math.max(...b)
        let res = a.filter(e => e.length == n)
        let arr = res.reduce((p,c) => {
            if (p.indexOf(c) == -1) p.push(c);
            else console.log("Aynı kelime bulundu")
            return p;
        }, [])
        return arr
    }
    
    shortestWord = (data) => {
        let a = data.split(/\s+/).map(e => e.toLowerCase().replace(/[.?,\/#!$%\^&\*;:{}=\-_`"~()]/g, ""));
        let b = a.map(e => e.length).filter(e => e > 1)
        let n = Math.min(...b)
        let res = a.filter(e => e.length == n+1)
        let arr = res.reduce((p,c) => {
            if (p.indexOf(c) == -1) p.push(c);
            else console.log("Aynı kelime bulundu")
            return p;
          }, [])
        return arr
    }
    mostRepeatedWord = (data) => {
        let c = data.replace(/\s+$/, '').split(/\s+/).map(e => e.toLowerCase())
        let words = c.reduce((a,b) => {
            a[b] = (a[b] || 0)+1
            return a;
        },{})
        let mc= Math.max(...Object.values(words))
        let mf= Object.keys(words).filter(k => words[k] == mc)
        return [mf,mc]
    }

    readingTime = (data) => {
        let w= this.wordCount(data)
        if(w > 0){
            let v = Math.ceil(w/200)
            return v;
        }
    }
    isSentenceLong = (data) => {
        let res = this.wordCount(data)/this.sentenceCount(data)
        return Math.ceil(res) >= 10 ? "Uzun" : "Kısa"
    }
    punctuationMarks = (data) => {
        let arr = (data.match(/[.?,\/!\*;:`"]/g) || [])
        let p = arr.reduce((a,b) => {
            a[b] = (a[b] || 0)+1
            return a;
        },{})
        return [Object.keys(p),Object.values(p)]
    }
    readabilityRate = (data) => {
        let l = 100 * data.replace(/[.\s,\/#!$%\^'&\*;:{}=\-_`~()]/g,"").length / this.wordCount(data);
        let s = 100 * (this.sentenceCount(data)) / (this.wordCount(data))
        let grade = (0.0588 * l) - (0.296 * s) - 15.8
        let res = Math.round(grade) <= 1 ? "1" : Math.round(grade) < 16 ? `${Math.round(grade)}` : "16+"
        return res 
    } 
}
export default Analsys