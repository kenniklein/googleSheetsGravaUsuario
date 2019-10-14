function Formcadastro(){

var Form = HtmlService.createTemplateFromFile("Dados")

var MostrarForm = Form.evaluate();
  
MostrarForm.setTitle("Cadastro").setHeight(250).setWidth(350);
  
SpreadsheetApp.getUi().showModalDialog(MostrarForm, "Cadastro");
  
}

function Registrar (Dados){

  var Plan = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Registros");  
  Plan.getRange(1,1).activate();
  
  var UltimaLinha = Plan.getLastRow();  
  var ss = SpreadsheetApp.getActiveSheet();
  
  for(i=1; i <= ss.getLastColumn(); i++) {
    if(Plan.getRange(1,i).activate().getValue() == "Telefone"){
      var ColunaTelefone = Plan.getActiveCell().getColumn();
      Plan.getRange(UltimaLinha + 1, 1).setValue([Dados.Nome]);
      Plan.getRange(UltimaLinha + 1, ColunaTelefone).setValue([Dados.Telefone]);
      var Menu = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Menu");
      Menu.getRange(1,1).activate();
      break;
    } 
    
  }
}
