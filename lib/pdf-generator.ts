export const generatePDF = async () => {
  try {
    // Dynamically import jspdf and html2canvas to reduce bundle size
    const [jsPDFModule, html2canvasModule] = await Promise.all([import("jspdf"), import("html2canvas")])

    const jsPDF = jsPDFModule.default
    const html2canvas = html2canvasModule.default

    // Create a new PDF document
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    })

    // Get all sections
    const sections = [
      document.getElementById("profile"),
      document.getElementById("contact"),
      document.getElementById("skills"),
      document.getElementById("experience"),
      document.getElementById("education"),
      document.getElementById("general"),
      document.getElementById("personal"),
    ]

    // Expand all collapsible sections for the PDF
    const expandButtons = document.querySelectorAll("button")
    const expandedState: { [key: string]: boolean } = {}

    // Store current expanded state and expand all sections
    expandButtons.forEach((button, index) => {
      const expanded = button.getAttribute("aria-expanded") === "true"
      expandedState[index] = expanded
      if (!expanded && button.getAttribute("aria-controls")) {
        button.click()
      }
    })

    // Wait for animations to complete
    await new Promise((resolve) => setTimeout(resolve, 500))

    let currentY = 10
    const pageWidth = doc.internal.pageSize.getWidth()
    const margin = 10
    const contentWidth = pageWidth - margin * 2

    // Add title
    doc.setFontSize(20)
    doc.setTextColor(41, 98, 255) // Primary color
    doc.text("Резюме - Пучков Никита Валерьевич", pageWidth / 2, currentY, { align: "center" })
    currentY += 10

    // Process each section
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i]
      if (!section) continue

      // Add section title
      const sectionTitle = section.querySelector("h2, h1")?.textContent || ""
      if (sectionTitle) {
        // Check if we need a new page
        if (currentY > 270) {
          doc.addPage()
          currentY = 10
        }

        doc.setFontSize(16)
        doc.setTextColor(41, 98, 255) // Primary color
        doc.text(sectionTitle, margin, currentY)
        currentY += 8
      }

      // Capture section content as image
      const canvas = await html2canvas(section, {
        scale: 2,
        useCORS: true,
        logging: false,
        allowTaint: true,
        backgroundColor: "#ffffff",
      })

      const imgData = canvas.toDataURL("image/jpeg", 0.95)

      // Calculate image dimensions to fit in PDF
      const imgWidth = contentWidth
      const imgHeight = (canvas.height * imgWidth) / canvas.width

      // Check if image fits on current page, otherwise add new page
      if (currentY + imgHeight > 280) {
        doc.addPage()
        currentY = 10
      }

      // Add image to PDF
      doc.addImage(imgData, "JPEG", margin, currentY, imgWidth, imgHeight)
      currentY += imgHeight + 10
    }

    // Restore original expanded state
    expandButtons.forEach((button, index) => {
      const shouldBeExpanded = expandedState[index]
      const isExpanded = button.getAttribute("aria-expanded") === "true"
      if (shouldBeExpanded !== isExpanded && button.getAttribute("aria-controls")) {
        button.click()
      }
    })

    // Save the PDF
    doc.save("Резюме_Пучков_Никита_Валерьевич.pdf")

    return true
  } catch (error) {
    console.error("Error generating PDF:", error)
    return false
  }
}
