if (Articles.find().count() === 0) {
    Articles.insert({
        tytul: ' Sekcje sportowe',
        tresc: ' Sekcje sportowe (naboru do sekcji dokonują poszczególni trenerzy)  :'
 });

    Articles.insert({
        tytul: 'Obiekty sportowe',
        tresc: 'Obiekty sportowe i rekreacyjne Studium Wychowania Fizycznego i Sportu UWM umieszczone są w różnych lokacjach na terenie całego Olsztyna. Oprócz dwóch obiektów w centrum miasta (sala na ul. Pana Tadeusza oraz sala na ul. Żołnierskiej) rolę głównego ośrodka sportowego uczelni pełni kompleks obiektów sportowych na terenie malowniczo położonego miasteczka studenckiego UWM w Kortowie. Miejsce te nie tylko ma wspaniałe predyspozycje sportowe wynikające z dostępności wielu obiektów takich jak; hale sportowe, stadion, siłownie czy boiska, Kortowo to także bliskość malowniczego jeziora Kortowskiego oraz lasu miejskiego, które to rewelacyjnie nadają się w celu rekreacyjnym.'
    });

    Articles.insert({
        tytul: 'Start Strony',
        tresc: 'Witaj na Stronie.'
    });
};
