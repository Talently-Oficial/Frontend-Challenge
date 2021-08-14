export function validateSelectOptions (options) {
  try {
    return options.every(option => ('value' in option) || ('text' in option))
  } catch {
    const receivedFormat = JSON.stringify(options)
    const error = 'Prop "options" expected Array<Object> but received ' + receivedFormat
    throw new Error(error)
  }
}

export function validateCharacters (characters) {
  const requiredAttributes = ['id', 'image', 'name', 'species', 'status', 'gender', 'created', 'url']

  try {
    return characters.every((character) => {
      // Get an Array of character attributes
      const characterAttributes = Object.keys(character)

      const haveAllRequiredAttributes = requiredAttributes.every(property => characterAttributes.includes(property))

      return haveAllRequiredAttributes
    })
  } catch (e) {
    throw new Error(e)
  }
}
