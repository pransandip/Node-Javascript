JSON.parse('{"p": 5, "s":6, "o":1, "l":9}', (key, value) => {
    const data = typeof value === 'number' ? value * 2 : value
    console.log(key, data)
})

// TODO