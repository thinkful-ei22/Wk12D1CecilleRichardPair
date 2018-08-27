// Write a recursive function that prints the following organization chart.
// Your output should be as shown below with proper indentation to show the
// hierarchy.

// Zuckerberg
//     Schroepfer
//         Bosworth
//             Steve
//             Kyle
//             Andra
//         Zhao
//             Richie
//             Sofia
//             Jen
//     Schrage
//         VanDyck
//             Sabrina
//             Michelle
//             Josh
//         Swain
//             Blanch
//             Tom
//             Joe
//     Sandberg
//         Goler
//             Eddie
//             Julie
//             Annie
//        Hernandez
//             Rowi
//             Inga
//             Morgan
//        Moissinac
//             Amy
//             Chuck
//             Vinni
//        Kelley
//             Eric
//             Ana
//             Wes

const orgHier = [
  { id: 'Zuckerberg', parent: null },
  { id: 'Schroepfer', parent: 'Zuckerberg' },
  { id: 'Schrage', parent: 'Zuckerberg' },
  { id: 'Sandberg', parent: 'Zuckerberg' },
  { id: 'Bosworth', parent: 'Schroepfer' },
  { id: 'Zhao', parent: 'Schroepfer' },
  { id: 'VanDyck', parent: 'Schrage' },
  { id: 'Swain', parent: 'Schrage' },
  { id: 'Goler', parent: 'Sandberg' },
  { id: 'Hernandez', parent: 'Sandberg' },
  { id: 'Moissinac', parent: 'Sandberg' },
  { id: 'Kelley', parent: 'Sandberg'},
  { id: 'Steve', parent: 'Bosworth'},
  { id: 'Kyle', parent: 'Bosworth' },
  { id: 'Andra', parent: 'Bosworth' },
  { id: 'Richie', parent: 'Zhao' },
  { id: 'Sofia', parent: 'Zhao' },
  { id: 'Jenn', parent: 'Zhao' },
  { id: 'Sabrina', parent: 'VanDyck' },
  { id: 'Michelle', parent: 'VanDyck' },
  { id: 'Josh', parent: 'VanDyck' },
  { id: 'Blanche', parent: 'Swain'},
  { id: 'Tom', parent: 'Swain' },
  { id: 'Joe', parent: 'Swain' },
  { id: 'Eddie', parent: 'Goler' },
  { id: 'Julie', parent: 'Goler' },
  { id: 'Annie', parent: 'Goler' },
  { id: 'Rowi', parent: 'Hernandez' },
  { id: 'Inga', parent: 'Hernandez' },
  { id: 'Morgan', parent: 'Hernandez' },
  { id: 'Amie', parent: 'Moissinac' },
  { id: 'Chuck', parent: 'Moissinac' },
  { id: 'Vinni', parent: 'Moissinac' },
  { id: 'Eric', parent: 'Kelley' },
  { id: 'Ana', parent: 'Kelley' },
  { id: 'Wes', parent: 'Kelley' }
]

function traverse(hierarchy, parent) {
    let node = {};
    hierarchy.filter(item => item.parent === parent)
                   .forEach(item => node[item.id] = traverse(hierarchy, item.id));
    return node;
}
console.log(traverse(orgHier, null));
