export default function dateFormat(dmy) {
    let date = new Date(dmy)
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
          date = date.toLocaleDateString('ru-RU', options).split(' ');
          date=`${date[0]} ${date[1]}, ${date[2]}`
          return date
};
