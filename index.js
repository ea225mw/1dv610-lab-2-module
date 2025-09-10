const str1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, temporibus, nulla ab commodi nobis neque fugit in accusamus, molestias tempore perspiciatis. Doloribus incidunt laboriosam ad eligendi qui ducimus nobis totam hic atque soluta voluptate dolorum ipsam et, facere repellendus vero at ab necessitatibus, eos eum nemo. Quaerat dolor modi aperiam, esse optio eum temporibus, sequi quo animi molestiae corporis ex praesentium et deleniti at incidunt. Qui adipisci nihil iste ipsum doloremque quisquam dolorem, odit obcaecati nulla labore animi.Ut minima perspiciatis soluta asperiores esse accusantium nisi voluptas. Minima dolore error doloribus exercitationem quam ratione delectus labore? Inventore harum quae dicta earum impedit quod, dolore soluta. Laudantium distinctio ipsum pariatur placeat suscipit sunt doloribus voluptatibus asperiores enim cum! Cum velit nulla cupiditate in consectetur rerum enim fuga ex? Voluptates maxime earum voluptatum, maiores dignissimos dolor commodi suscipit, reprehenderit alias facilis cum! Quisquam nemo et at nulla non hic ratione! Maiores laborum qui repellendus vitae accusantium ut eaque, corrupti non deleniti quis earum necessitatibus aliquid ab ea ipsam. Aliquid quas maiores labore possimus, maxime ad ut, nobis esse dolores quibusdam praesentium, hic excepturi obcaecati aperiam. Explicabo corporis culpa adipisci. Numquam provident nesciunt sunt, harum ducimus cupiditate non dicta, voluptate iusto amet hic.'

const str2 = 'SMHI utfärdar gula varningar för skyfall i hela östra Svealand. Varningen gäller från kl 17 på onsdagen till och med kl 03 på torsdag morgon. – Det kan bli översvämningar, säger SVT:s meteorolog Pia Hultgren. De kraftiga skurarna kan leda till mycket regn på kort tid vilket i sin tur kan leda till översvämningar, enligt SMHI. Varningen gällde till en början för Stockholm samt Uppsala län. Men på den sena eftermiddagen utökade SMHI den gula varningen till att gälla hela östra Svealand, där Västerås, Eskilstuna och Södertälje ingår. Varningen sträcker sig från onsdagseftermiddagen kl 17 fram till natten mot torsdag vid 03. 20–40 mm regn kan komma på kort tid när regnskurarna drar in söderifrån. ”Kan innehålla åska” Det kraftiga regnet skulle kunna innehålla åska också, säger SVT:s meteorolog Pia Hultgren.– Det har varit lite blixt som kommer från sydost och ligger ute mellan Gotland och fastlandet. Det har redan varit en förlöpare som fortsätter vidare mot Dalarna, säger hon. Hultgren varnar för att det lokalt kan bli översvämningar när det kommer mycket regn på kort tid och att man bör se över sin källare och dagvattensystem. Det är viktigt att köra försiktigare, tillägger hon, ifall det står vatten efter en ordentlig skur. – Restiden kan bli lite längre. Mer regn väntar i morgon I morgon ungefär vid samma tid som i dag väntar mer regn som sedan kommer att fortsätta under kvällen, enligt Hultgren. – Det är bara att ta fram regnutrustningen, säger hon.'

function cleanUpString(string) {
  const regExp = /[\.,:;!\?\/\-\–"]/g

  return string.replaceAll(regExp, ' ')
}

function findLongestWord(string) {
  if (typeof string !== 'string') {
    // Handle exception
  }

  const cleanedString = cleanUpString(string)

  const splitOnWhitespace = cleanedString.split(' ')

  splitOnWhitespace.sort((a, b) => a.length - b.length);
  const filteredArray = splitOnWhitespace.filter((element) => element.length > 0)
  console.table(filteredArray);
}

findLongestWord(str2)