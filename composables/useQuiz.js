export default function (step) {
    const values = reactive([]);


    const nextStep = () => {
        setPageLayout.value += 1;
        FormData.submit();
    };

    const save = (selectedAnswer) => {
        if (selectedAnswer !== null && selectedAnswer !== undefined) {
            values.push(selectedAnswer); 
            step.value += 1; 
        } else {
            console.error("Aucune réponse sélectionnée");
        }
    };  

    return {
        values,
        nextStep,
        save,
        step,
    };
}
