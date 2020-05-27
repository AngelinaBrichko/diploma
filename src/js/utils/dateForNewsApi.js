 export default function dateForNewsApi(date)  {
    let date1 = date.toLocaleDateString('ru-RU', ).split('.')
    let date2=`${date1[2]}-${date1[1]}-${date1[0]}`
    return date2
}
