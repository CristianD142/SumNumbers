export default (...numbers) => {

    return numbers.reduce((accumulator, current) => {
        return accumulator += current;
    });

}