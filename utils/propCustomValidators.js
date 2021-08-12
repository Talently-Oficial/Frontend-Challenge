export function validateSelectOptions (options) {
  try {
    return options.every(option => ('value' in option) || ('text' in option))
  } catch {
    const receivedFormat = JSON.stringify(options)
    const error = 'Prop "options" expected Array<Object> but received ' + receivedFormat
    throw new Error(error)
  }
}
