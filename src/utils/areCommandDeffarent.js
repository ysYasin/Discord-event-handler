module.exports = async (existingCommand, localCommand) => {

    const areChoiceDeffarence = async (existingChoices, localChoices) => {
        for (const localChoice of localChoices) {
            const existingChoice = await existingChoices.find(
                (choice) => choice.name === localChoice.name
            )

            if (!existingChoice) {
                return true;
            }

            if (
                existingChoice.value !== localChoice.value
            ) {
                return true;
            }
        }
        return false;
    }


    const areOptionDeffarent = async (existingOptions, localOptions) => {
        for (const localOption of localOptions) {
            const existingOption = await existingOptions.find(
                option => option.name === localOption.name
            )

            if (!existingOption) {
                return true;
            }
            if (
                existingOption.description !== localOption.description ||
                existingOption.name !== localOption.name ||
                existingOption.type !== localOption.type ||
                (existingOption.required || false) !== localOption.required ||
                (existingOption.choices?.length || 0) !== (localOption.choices.length || 0) ||
                areChoiceDeffarence(existingOption.choices, localOption.choices)
            ) {
                return true;
            }
        }
        return false;
    }


    if (
        existingCommand.name !== localCommand.name ||
        existingCommand.description !== localCommand.description ||
        (existingCommand.options?.length || 0) !==
        (localCommand.options?.length | 0) ||
        areOptionDeffarent(existingCommand.options, localCommand.options)
    ) {
        return true;
    } else {
        return false;
    }
};