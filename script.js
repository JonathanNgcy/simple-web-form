function validateForm() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var income = document.getElementById("income").value;

    if (name === "" || age === "" || income === "") {
        alert("Please fill out all required fields.");
        return false;
    }

    // Clear the form fields
    document.getElementById("descriptor").value = "";
    document.getElementById("name").value = "";
    document.querySelector('input[name="sex"]:checked').checked = false;
    document.getElementById("age").value = "";
    document.getElementById("income").value = "";

    // Show confirmation message
    document.getElementById("confirmation").classList.remove("d-none");

    return false; // Prevent form submission (
}
function saveAsPDF() {
    // Create a new jsPDF instance
    if(validateForm==false){
        alert("Please fill out all required fields.");
        return false;
    }
    var pdf = new jsPDF();

    // Add content to the PDF
    pdf.text("Form data", 10, 10); // Add a title for the form data

    // Get form values
    var descriptor = document.getElementById("descriptor").value;
    var name = document.getElementById("name").value;
    var sex = document.querySelector('input[name="sex"]:checked').value;
    var age = document.getElementById("age").value;
    var income = document.getElementById("income").value;

    // Add form data to the PDF
    pdf.text("Descriptor: " + descriptor, 10, 20);
    pdf.text("Name: " + name, 10, 30);
    pdf.text("Sex: " + sex, 10, 40);
    pdf.text("Age: " + age, 10, 50);
    pdf.text("Income: " + income, 10, 60);

    // Save the PDF with a unique name (using a timestamp)
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, "");
    const pdfFileName = `webform_${timestamp}.pdf`;

    // Save the PDF and trigger download
    pdf.save(pdfFileName);

    // Show PDF confirmation message
    document.getElementById("pdfConfirmation").classList.remove("d-none");
}
