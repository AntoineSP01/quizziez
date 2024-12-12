export default function () {
    const values = reactive([]);

    const nextStep = () => {
        setPageLayout.value += 1;
        FormData.submit();
    };

    
    
    return {
        values,
        nextStep,
    };
}
