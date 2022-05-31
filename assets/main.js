$(document).ready(function () {


    var score = 0;


    //progressbar
    function progress(timeleft, timetotal, $element) {
        var progressBarWidth = timeleft * $element.width() / timetotal;
        console.log(timeleft);
        $element.find('div').animate({ width: progressBarWidth }, 500).html(Math.floor(timeleft / 60) + ":" + timeleft % 60);

        // $element.find('div').css({ 'width': '{visible}' }).html(Math.floor(timeleft / 60) + ":" + timeleft % 60);
        if (timeleft > 0) {
            setTimeout(function () {
                progress(timeleft - 1, timetotal, $element);
            }, 1000);
        } else {
            console.log(score);
            if (score == 36) return false;
            $('.fadebg').css({ 'height': '1220px', 'background-color': 'rgba(57, 59, 62, 0.74)', 'z-index': '1' });
            $('.col-xs-8 p').css({ 'visibility': 'visible' });
            $('.loseGame').css({ 'opacity': '1', 'visibility': 'visible' });
            document.getElementById("audio").pause();
            document.getElementById("lose").play();
        }
    };

    //////////////////////////////////////////////////////////
    $('i.fas.fa-volume-off').hide();

    $('button.btn.btn-warning').click(function (event) {
        $('.container-fluid .row9').addClass('showGame');
        $('.progressBar').addClass('showGame');
        $('i.fas.fa-volume-off').show();
        $('i.fas.fa-volume-up').hide();
        document.getElementById("audio").play();

        $('i.fas.fa-volume-off').click(function (event) {
            document.getElementById("audio").pause();
            $('i.fas.fa-volume-off').hide();
            $('i.fas.fa-volume-up').show();
        });

        $('i.fas.fa-volume-up').click(function (event) {
            document.getElementById("audio").play();
            $('i.fas.fa-volume-up').hide();
            $('i.fas.fa-volume-off').show();
        });

        // hiển thị game
        progress(80, 80, $('.progressBar')); // time 80
    });

    $(window).scroll(function (event) {
        var pos = $('html, body').scrollTop();
        console.log(pos);
        //	pos3 = $('.contact').offset().top;
        if (20 <= pos && pos <= 80) {
            $('a.nav-link').removeClass('changeColor');
            $('a.nav-link.a_rules').addClass('changeColor');
        } else if (81 < pos && pos <= 430) {
            $('a.nav-link').removeClass('changeColor');
            $('a.nav-link.a_gameplay').addClass('changeColor');
        } else if (431 < pos) {
            $('a.nav-link').removeClass('changeColor');
            $('a.nav-link.a_contact').addClass('changeColor');
        } else {
            $('a.nav-link').removeClass('changeColor');
        }
    });

    $('a.nav-link.a_rules').click(function (event) {
        $('a.nav-link').removeClass('changeColor');
        $(this).addClass('changeColor');
        $('html, body').animate({
            scrollTop: $('.rules').offset().top
        }, 200);
    });

    $('a.nav-link.a_rules').click(function (event) {
        $('a.nav-link').removeClass('changeColor');
        $(this).addClass('changeColor');
        $('html, body').animate({
            scrollTop: $('.rules').offset().top
        }, 200);
    });

    $('a.nav-link.a_gameplay').click(function (event) {
        $('a.nav-link').removeClass('changeColor');
        $(this).addClass('changeColor');
        $('html, body').animate({
            scrollTop: $('.gameplay').offset().top - 100
        }, 200);
    });

    $('a.nav-link.a_contact').click(function (event) {
        $('a.nav-link').removeClass('changeColor');
        $(this).addClass('changeColor');
        $('html, body').animate({
            scrollTop: $('.contact').offset().top
        }, 200);
    });
    //////////////////////// code for game loop ////////////////////////////////////

    var cards = [
        '1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '21.png', '31.png', '20.png', '22.png', '23.png', '24.png', '25.png', '26.png', '27.png', '28.png', '29.png', '30.png', '32.png', '33.png', '34.png', '35.png', '36.png', '37.png', '38.png', '39.png', '40.png', '41.png', '42.png',
    ];//42 thẻ
    function shuffle(array) {

        var pair = 18, randomIndex; //số card chơi/ 2

        var finalArray = [];
        var test = [];

        for (var i = 0; i < 41; i++) { test[i] = true; }

        while (pair >= 0) {

            while (test[randomIndex] == false) {

                randomIndex = Math.floor(Math.random() * array.length);
            }

            finalArray[pair] = array[randomIndex];
            pair--;
            test[randomIndex] = false;
        }
        finalArray.pop();
        return finalArray;
    }


    var finalCards = [];
    finalCards = shuffle(cards);


    finalCards = finalCards.concat(finalCards); //////////     x2 mảng    //////////
    finalCards.sort(function (a, b) { return 0.5 - Math.random(); });/////// xếp ngẫu nhiên mảng 24 quân ///////////

    document.getElementById("n1").src = './assets/imgs/' + finalCards[0];
    document.getElementById("n2").src = './assets/imgs/' + finalCards[1];
    document.getElementById("n3").src = './assets/imgs/' + finalCards[2];
    document.getElementById("n4").src = './assets/imgs/' + finalCards[3];
    document.getElementById("n5").src = './assets/imgs/' + finalCards[4];
    document.getElementById("n6").src = './assets/imgs/' + finalCards[5];
    document.getElementById("n7").src = './assets/imgs/' + finalCards[6];
    document.getElementById("n8").src = './assets/imgs/' + finalCards[7];
    document.getElementById("n9").src = './assets/imgs/' + finalCards[8];
    document.getElementById("n10").src = './assets/imgs/' + finalCards[9];     ///////  ĐẶT vào html  //////
    document.getElementById("n11").src = './assets/imgs/' + finalCards[10];
    document.getElementById("n12").src = './assets/imgs/' + finalCards[11];
    document.getElementById("n13").src = './assets/imgs/' + finalCards[12];
    document.getElementById("n14").src = './assets/imgs/' + finalCards[13];
    document.getElementById("n15").src = './assets/imgs/' + finalCards[14];
    document.getElementById("n16").src = './assets/imgs/' + finalCards[15];
    document.getElementById("n17").src = './assets/imgs/' + finalCards[16];
    document.getElementById("n18").src = './assets/imgs/' + finalCards[17];
    document.getElementById("n19").src = './assets/imgs/' + finalCards[18];
    document.getElementById("n20").src = './assets/imgs/' + finalCards[19];
    document.getElementById("n21").src = './assets/imgs/' + finalCards[20];
    document.getElementById("n22").src = './assets/imgs/' + finalCards[21];
    document.getElementById("n23").src = './assets/imgs/' + finalCards[22];
    document.getElementById("n24").src = './assets/imgs/' + finalCards[23];
    document.getElementById("n25").src = './assets/imgs/' + finalCards[24];
    document.getElementById("n26").src = './assets/imgs/' + finalCards[25];
    document.getElementById("n27").src = './assets/imgs/' + finalCards[26];
    document.getElementById("n28").src = './assets/imgs/' + finalCards[27];
    document.getElementById("n29").src = './assets/imgs/' + finalCards[28];
    document.getElementById("n30").src = './assets/imgs/' + finalCards[29];
    document.getElementById("n31").src = './assets/imgs/' + finalCards[30];
    document.getElementById("n32").src = './assets/imgs/' + finalCards[31];
    document.getElementById("n33").src = './assets/imgs/' + finalCards[32];
    document.getElementById("n34").src = './assets/imgs/' + finalCards[33];
    document.getElementById("n35").src = './assets/imgs/' + finalCards[34];
    document.getElementById("n36").src = './assets/imgs/' + finalCards[35];


    document.getElementById("n1").setAttribute('data-name', finalCards[0]);
    document.getElementById("n2").setAttribute('data-name', finalCards[1]);
    document.getElementById("n3").setAttribute('data-name', finalCards[2]);
    document.getElementById("n4").setAttribute('data-name', finalCards[3]);
    document.getElementById("n5").setAttribute('data-name', finalCards[4]);
    document.getElementById("n6").setAttribute('data-name', finalCards[5]);
    document.getElementById("n7").setAttribute('data-name', finalCards[6]);
    document.getElementById("n8").setAttribute('data-name', finalCards[7]);
    document.getElementById("n9").setAttribute('data-name', finalCards[8]);
    document.getElementById("n10").setAttribute('data-name', finalCards[9]);
    document.getElementById("n11").setAttribute('data-name', finalCards[10]);
    document.getElementById("n12").setAttribute('data-name', finalCards[11]);
    document.getElementById("n13").setAttribute('data-name', finalCards[12]);
    document.getElementById("n14").setAttribute('data-name', finalCards[13]);    //      set data-name     //
    document.getElementById("n15").setAttribute('data-name', finalCards[14]);
    document.getElementById("n16").setAttribute('data-name', finalCards[15]);
    document.getElementById("n17").setAttribute('data-name', finalCards[16]);
    document.getElementById("n18").setAttribute('data-name', finalCards[17]);
    document.getElementById("n19").setAttribute('data-name', finalCards[18]);
    document.getElementById("n20").setAttribute('data-name', finalCards[19]);
    document.getElementById("n21").setAttribute('data-name', finalCards[20]);
    document.getElementById("n22").setAttribute('data-name', finalCards[21]);
    document.getElementById("n23").setAttribute('data-name', finalCards[22]);
    document.getElementById("n24").setAttribute('data-name', finalCards[23]);
    document.getElementById("n25").setAttribute('data-name', finalCards[24]);
    document.getElementById("n26").setAttribute('data-name', finalCards[25]);
    document.getElementById("n27").setAttribute('data-name', finalCards[26]);
    document.getElementById("n28").setAttribute('data-name', finalCards[27]);
    document.getElementById("n29").setAttribute('data-name', finalCards[28]);
    document.getElementById("n30").setAttribute('data-name', finalCards[29]);
    document.getElementById("n31").setAttribute('data-name', finalCards[30]);
    document.getElementById("n32").setAttribute('data-name', finalCards[31]);
    document.getElementById("n33").setAttribute('data-name', finalCards[32]);
    document.getElementById("n34").setAttribute('data-name', finalCards[33]);
    document.getElementById("n35").setAttribute('data-name', finalCards[34]);
    document.getElementById("n36").setAttribute('data-name', finalCards[35]);


    /////////////////////////////////////////////////////////////////////////

    var current = null, nextCurrent = null;
    $('.cards').click(function (event) {

        $(this).find('.back').toggleClass('backFlip');
        $(this).find('.front').toggleClass('frontFlip');

        if (!current) {
            current = $(this);
        } else {
            nextCurrent = $(this);

            if (nextCurrent.find('.front img').attr('data-name') != current.find('.front img').attr('data-name')) {
                // 2 dataname khác nhau
                /*          console.log(current.find('.front img').attr('id'));
                          console.log(nextCurrent.find('.front img').attr('id'));
                          console.log("khác nhau");
                */
                setTimeout(function () {
                    nextCurrent.find('.back').removeClass('backFlip');
                    nextCurrent.find('.front').removeClass('frontFlip');
                    nextCurrent = null;

                    current.find('.back').removeClass('backFlip');
                    current.find('.front').removeClass('frontFlip');
                    current = null;
                }, 200);
                //set 200ms có vẻ hơi khó chơi nhỉ :/

            } else {
                // giống nhau
                /*          console.log(current.find('.front img').attr('id'));
                          console.log(nextCurrent.find('.front img').attr('id'));*/
                if (nextCurrent.find('.front img').attr('id') == current.find('.front img').attr('id')) return false;
                current.css({ 'opacity': '0', 'transition': '0.7s', 'cursor': 'default' });
                nextCurrent.css({ 'opacity': '0', 'transition': '0.7s', 'cursor': 'default' });
                current = null;
                nextCurrent = null;
                score += 2;
            }
        }

        if (score == 36) {
            $('.fadebg').css({ 'height': '1220px', 'background-color': 'rgba(57, 59, 62, 0.74)', 'z-index': '1' });
            $('.col-xs-8 p').css({ 'visibility': 'visible' });
            $('.winGame').css({ 'opacity': '1', 'visibility': 'visible' });
            document.getElementById("audio").pause();
            document.getElementById("victory").play();
        }

    });

    $('button.restart').click(function (event) {
        location.reload();
    });


});