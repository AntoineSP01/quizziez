export default function useQuizs() {
    const quizzList = ref([]);

    const fetchQuizs = async () => {
        try {
            quizzList.value = await queryContent("quizz").find();
        } catch (error) {
            console.error("Erreur lors du chargement des quiz :", error);
        }
    };

    return {
        quizzList,
        fetchQuizs,
    };
}
