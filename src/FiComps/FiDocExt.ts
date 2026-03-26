export class FiDocExt {

  /**
   * 
   * @param {HTMLDocument} pDoc 
   */    
  public static addClickDropdownAutoClose(pDoc: HTMLDocument) : void {
    pDoc.addEventListener("click", (e) => {
      const dropdowns = pDoc.querySelectorAll("[fi-input-type='dropdown-auto']");
      dropdowns.forEach((dropdown) => {
        if (!dropdown.contains(e.target as Node)) {
          (dropdown as HTMLDetailsElement).open = false;
        }
      });
    });
  }

}