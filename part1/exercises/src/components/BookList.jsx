export default function BookList() {
   let pageTitle = "Book Club!";
   let book1 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1678290705i/123206298.jpg";
   let book2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSijda_tts9zRstuDDRkDsh-1OmLp0sdRRtlw&usqp=CAU";
   let book3 = "https://img.buzzfeed.com/buzzfeed-static/static/2020-10/6/19/asset/a47d43dbc642/sub-buzz-10116-1602012920-16.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} width='100px' alt="Murtagh by Christopher Paolini" />
         <img src={book2} width='100px' alt="Inheritance by Nora Roberts" />
         <img src={book3} width='100px' alt="Broken Wish by Julie C. Dao" />
      </div>      
   );
}