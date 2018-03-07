function* getCats() {
    const cats = ['Foo', 'Bar', 'Boley', 'Slurpy', 'Grumpy', 'Whiskers', 'Mr. Bog', 'Gucci'];
    const fat_cats = [];

    for (const cat of cats) {
        // yield *out* each name AND store the returned data into the fat_cats array
        fat_cats.push(yield cat);
    }
    return fat_cats;
}

const generatorIterator = getCats();

// get the first name out of the generator
let name = generatorIterator.next().value;
console.log(name)


//The yield keyword is used to pause a generator and used to send data outside of the generator, and then the .next() method is used to pass data into the generator.

/*
// pass data in *and* get the next name
name = generatorIterator.next(`${name} is cute!`).value;

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is fat!`).value;

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is cuddly!`).value;

// you get the idea
name = generatorIterator.next(`${name} is a kitty!`).value;
name = generatorIterator.next(`${name} is grand!`).value;
name = generatorIterator.next(`${name} is a mommy!`).value;
name = generatorIterator.next(`${name} is cutesy!`).value;

// pass the last data in, generator ends and returns the array
const positions = generatorIterator.next(`${name} is adorable!`).value;

// displays each name with description on its own line
positions.join('\n');
*/
