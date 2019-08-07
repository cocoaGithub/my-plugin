import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/

export default function () {
  const doc = sketch.getSelectedDocument()
  const selectedLayers = doc.selectedLayers
  const selectedCount = selectedLayers.length

  // sketch.UI.message("It's alive 🙌")
  if (selectedCount === 0) {
    sketch.UI.message('No layers are selected.')
  } else {
    sketch.UI.message(`${selectedCount} layers selected.`)
  }
  doc.askForUserInput_initialValue("Enter your pages", "2")
}
