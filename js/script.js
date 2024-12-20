document.getElementById("convert").onclick = function()
{
    const temp = parseFloat(document.getElementById("temp").value);
    const unit = document.getElementById("unit");
    const res = document.getElementById("result");
    let result = unit.value =='C'?(temp* 9/5 +32):((temp-32) * 5/9);
    res.textContent = result.toFixed(5);
};