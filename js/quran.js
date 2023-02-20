




for( var m = 1 ; m <= 624 ; m++ ) {
    if( m < 10 ) {
        document.write('<img src="./image/quran-00'+m+'.jpg"  class="quranread"  />')
    } else if( m < 100 ) {
        document.write('<img src="./image/quran-0'+ m+'.jpg"  class="quranread"  />')
    } else {
        document.write('<img src="./image/quran-'+m+'.jpg" class="quranread"  />')
    }
};



