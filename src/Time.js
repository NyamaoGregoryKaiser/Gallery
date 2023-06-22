const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    {  weekday: 'long' }
  ).format(date);
}
function formaDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { month: 'long'}
  ).format(date);
}
export default function Times() {
  return (
    <section>
      <h1><b>Month:  </b> <i>{formaDate(today)}</i></h1>
      <h1><b>Day:  </b> <i>{formatDate(today)}</i></h1>
      
</section>

    
  );
}