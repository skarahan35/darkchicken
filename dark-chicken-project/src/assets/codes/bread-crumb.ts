export const basicCrumbHTML =`
<dca-bread-crumb [crumbList]="crumbList"></dca-bread-crumb>`

export const basicCrumbTS = `
crumbList: BreadCrumbModel[] = [
    { link: 'pages/inputs',icon: 'house' },
    { label: 'Page 1', link: 'https://www.google.com', icon: 'anchor' },
    { label: 'Page 2'  },
    { label: 'Page 3' },
  ];`

  export const eventBreadCrumbHTML=`
  <dca-bread-crumb (dcClick)="dcClick($event)"
  (dcHover)="dcHover($event)"
  (dcMouseUp)="dcMouseUp($event)"
  (dcMouseDown)="dcMouseDown($event)"
  (dcMouseLeave)="dcMouseLeave($event)"
  (dcMouseEnter)="dcMouseEnter($event)"
  (dcDoubleClick)="dcDoubleClick($event)"
  [crumbList]="crumbList"
  class="content-lib-item"></dca-bread-crumb>`

  export const eventBreadCrumbTS=`
  dcClick(e: any) {
    console.log({ dcClick: e })
  }
  dcHover(e: any) {
    console.log({ dcHover: e })
  }
  dcMouseUp(e: any) {
    console.log({ dcMouseUp: e })
  }
  dcMouseDown(e: any) {
    console.log({ dcMouseDown: e })
  }
  dcMouseLeave(e: any) {
    console.log({ dcMouseLeave: e })
  }
  dcMouseEnter(e: any) {
    console.log({ dcMouseEnter: e })
  }
  dcDoubleClick(e: any) {
    console.log({ dcDoubleClick: e })
  }`