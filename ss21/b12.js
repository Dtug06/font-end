for (let i = 0; i < 10; i++) {

    let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;


    console.log(`%cColor ${i + 1}: ${randomColor}`, `color: ${randomColor}; font-size: 16px;`);
}
