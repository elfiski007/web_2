function SortNum([,a], [,b]) { 
    if ([,a] > [,b]) return 1;
    if ([,a] == [,b]) return 0;
    if ([,a] < [,b]) return -1;
  }
function Sorti(arr){ 
    let entries = [...arr].map((e) => e) ;
    entries.sort(SortNum); 
    l = entries.length;
    a = entries[l-1];
    b = entries[l-2];
    c = entries[l-3];
    const mas = new Map (
        [a]
    );
    mas.set(b[0],b[1]);
    mas.set(c[0], c[1]);
    return mas;
}
function task21(arr){ 
    let i = new Map();
    let g = 1;
    let k = 0;
    while (g <= 12){
        const even = arr.filter(function (n) {
            if (n.month == g){k++}
            return n.month == g;
          })
        i.set(g, k)
        k = 0;
        g++;
    }
    h = Sorti(i);
    let entries = [...h].map((e) => e);
    a = entries[0];
    b = entries[1];
    c = entries[2];
    console.log('{ year: 2019, month: ' + a[0] + ', opsCount: ' + a[1] + 
    '}\n{ year: 2019, month: ' + b[0] + ', opsCount: ' + b[1] + 
    '}\n{ year: 2019, month: ' + c[0] + ', opsCount: ' + c[1] + '}')
    }; 
function task22(year, month, arr) {
    let date;
    let monthBalance;
    let monthWithdrawal;
    let withdrawalRate = 0;
    let rank;
    let r = 0;
    let p = 0;
    let day;
    let c = 0;
    day = arr.filter(function(n){
        if (n.year == year && n.month == month){
            if(n.type == "replenishment"){
                r += n.amount;
            } else if (n.type == "payment"){
                p += n.amount;
            } else {
                withdrawalRate += n.amount;
            }
            c= n.day;
        }
        return c;
    })
    date = year + '-' + month + '-' + c;
    monthBalance = r - (p + withdrawalRate);
    monthWithdrawal = ((p + withdrawalRate)/(r/100))/100;
    monthWithdrawal = Number(monthWithdrawal.toFixed(3));
    if (monthWithdrawal < 0.15 ){
        rank = 'Gold';
    } else if (monthWithdrawal < 0.3 && monthWithdrawal > 0.15){
        rank = 'Silver'
    } else {
        rank = 'Bronze'
    }
    let it = 'date :' + date +
        '\nmonthBalance :' + monthBalance +
        '\nmonthWithdrawal :' + monthWithdrawal +
        '\nwithdrawalRate :' + withdrawalRate +
        '\nrank :' + rank;
    const mp = new Map([
        ['date', date],
        ['monthBalance', monthBalance],
        ['monthWithdrawal',monthWithdrawal],
        ['withdrawalRate', withdrawalRate],
        ['rank',rank]]
    )
    console.log(it);
    return mp;
}
function task23(arr) {
let totalBalance = 0;
let i = 1;
    while(i<=12){
        let fu = task22(2019,i,arr);
        i++;
        totalBalance += fu.get('monthBalance');
        let it = 'date :' + fu.get('date') +
        '\nmonthBalance :' + fu.get('monthBalance') +
        '\ntotalBalance :' + totalBalance +
        '\nmonthWithdrawal :' + fu.get('monthWithdrawal') +
        '\nwithdrawalRate :' + fu.get('withdrawalRate') +
        '\nrank :' + fu.get('rank');
        console.log(it)
}
}