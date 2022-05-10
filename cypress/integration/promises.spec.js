it('Sem título',() => {})

const getSomething =  () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(12)
        }, 1000)
    })

}

const system = () => {
    console.log('init');
    const prom = getSomething();

    prom.then(some => {
        console.log(some);
    });
    console.log('end');
}

system();