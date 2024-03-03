const hexEl = document.getElementById("hex-code");
const inputColor = document.getElementById("inputColor");
const sliderPerc = document.getElementById("slider-percentage");
const slider = document.getElementById("slider");
const alteredColorLabel = document.getElementById("altered-color");

hexEl.addEventListener("keypress",function(e){
    if(e.key=='Enter'){
    let hexCode=hexEl.value
    hexCode=hexCode.replace("#",'')
    if(!isValidHex(hexCode)) 
    alert("enter a valid hex code")
    inputColor.style.backgroundColor="#"+hexCode
    slider.value=0
    alteredColor.style.backgroundColor="#"+hexCode
    sliderPerc.textContent=`0%`

}
})
slider.addEventListener("input",function(){
    const hexCode=hexEl.value;
    if(!isValidHex(hexCode)) 
    alert("enter a valid hex code")
    sliderPerc.textContent=`${slider.value}%`
    const sliderHex=increaseRGBvalues(hexCode,sliderPerc.textContent)
    alteredColorLabel.textContent=`Altered color ${sliderHex}`
    alteredColor.style.backgroundColor=sliderHex

})

const isValidHex = (hexCode) =>{
    return (hexCode.length==3 || hexCode.length == 6)
}
 const convertHexToRGB = (hexCode) =>{
    if(!isValidHex(hexCode)) return null
    if(hexCode.length == 3){
        hexCode=hexCode[0]+hexCode[0]+hexCode[1]+hexCode[1]+hexCode[2]+hexCode[2]
    }
    const r = parseInt(hexCode.substring(0,2),16)
    const g = parseInt(hexCode.substring(2,4),16)
    const b = parseInt(hexCode.substring(4,6),16)
    return {r,g,b}
 }

 const convertRGBToHex = (r,g,b) => {
    const first =("0"+ r.toString(16)).slice(-2)
    const second = ("0"+ g.toString(16)).slice(-2)
    const third = ("0"+ b.toString(16)).slice(-2)

    return "#"+first+second+third
 }

 const increaseRGBvalues = (hexCode,per) =>{
    const {r,g,b}=convertHexToRGB(hexCode)
    const increasedVal = Math.floor(((per.replace("%",""))/100)*255)
    const newR = increased0to255(r,increasedVal)
    const newG = increased0to255(g,increasedVal)
    const newB = increased0to255(b,increasedVal)
    const convertedHex=convertRGBToHex(newR,newG,newB)
    return convertedHex
 }
 const increased0to255 = (val,increasedVal) => {
    return Math.min(255,Math.max(0,val+increasedVal))
 }