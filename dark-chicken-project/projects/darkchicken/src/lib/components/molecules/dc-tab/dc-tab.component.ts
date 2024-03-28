import { AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, OnChanges, Output, QueryList, SimpleChanges, ViewChildren, ViewEncapsulation } from '@angular/core';
import { TabModel } from '../../../models/dc-models.model';


@Component({
  selector: 'dcm-tab',
  templateUrl: './dc-tab.component.html',
})
export class DcTabComponent implements OnChanges, AfterViewInit {

  @Input() tab: TabModel[] | null = null
  @Input() id : string = 'tab'
  @Input() dcClass:string =''

  @Output() dcTabChange = new EventEmitter<Object>()
  @Output() dcTabClick = new EventEmitter<Object>()
  @Output() dcTabHover = new EventEmitter<Object>()
  @Output() dcTabMouseDown = new EventEmitter<Object>()
  @Output() dcTabMouseUp = new EventEmitter<Object>()
  @Output() dcTabMouseEnter = new EventEmitter<Object>()
  @Output() dcTabMouseLeave = new EventEmitter<Object>()
  @Output() dcTabDoubleClick = new EventEmitter<Object>()


  @ContentChildren('tabContent') tabContents!: QueryList<ElementRef>

  tabContentArray!: ElementRef[]
  activeTab: TabModel | null = null

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tab']) {
      let activeTabs = this.tab?.filter((tabItem: TabModel) => tabItem.isActive === true)
      this.activeTab = activeTabs ? (activeTabs.length > 0 ? activeTabs[0] : (this.tab ? this.tab[0] : null)) : null;
    }
  }

  ngAfterViewInit(): void {
    this.tabContentArray = this.contentToArray()
    this.displayNone()
    this.activateTab()
    this.tabContents.changes.subscribe(() => {
      this.tabContentArray = this.contentToArray()
      this.displayNone()
      this.activateTab()
    })
  }

  displayNone() {
    this.tabContentArray.forEach((tab: ElementRef) => {
      if (!tab.nativeElement.classList.contains('tab-content')) {
        (tab.nativeElement as HTMLElement).classList.add('tab-content')
      }
    })
  }

  activateTab() {
    this.tabContentArray.forEach((tab: ElementRef) => {
      if ((tab.nativeElement as HTMLElement).classList.contains('active-tab-content')) {
        (tab.nativeElement as HTMLElement).classList.remove('active-tab-content');
      }
      if (tab.nativeElement.id == this.activeTab?.tabId) {
        (tab.nativeElement as HTMLElement).classList.add('active-tab-content');
      }
    })
  }
  contentToArray() {
    return Array.from(this.tabContents)
  }

  onTabChange( e: Event, tabItem: TabModel) {
    let oldActiveTab = this.activeTab
    this.activeTab = tabItem
    this.tabContentArray = this.contentToArray()
    this.displayNone()
    this.activateTab()
    this.dcTabChange.emit({ nativeElement: e, oldActiveTab: oldActiveTab, newActiveTab: this.activeTab })
  }

  onTabClick(e: Event, tabItem: TabModel) {
    this.dcTabClick.emit({
      nativeElement: e,
      tabItem: tabItem
    })
  }

  //#region onHover Event
  onTabHover(e: Event, tabItem: TabModel) {
    this.dcTabHover.emit({ nativeElement: e, tabItem: tabItem })
  }
  //#endregion

  //#region onMouseDown Event
  onTabMouseDown(e: Event, tabItem: TabModel) {
    this.dcTabMouseDown.emit({ nativeElement: e, tabItem: tabItem })
  }
  //#endregion

  //#region onMouseUp Event
  onTabMouseUp(e: Event, tabItem: TabModel) {
    this.dcTabMouseUp.emit({ nativeElement: e, tabItem: tabItem })
  }
  //#endregion

  //#region onMouseEnter Event
  onTabMouseEnter(e: Event, tabItem: TabModel) {
    this.dcTabMouseEnter.emit({ nativeElement: e, tabItem: tabItem })
  }
  //#endregion

  //#region onMouseOut Event
  onTabMouseLeave(e: Event, tabItem: TabModel) {
    this.dcTabMouseLeave.emit({ nativeElement: e, tabItem: tabItem })
  }
  //#endregion

  //#region onDoubleClick Event
  onTabDoubleClick(e: Event, tabItem: TabModel) {
    this.dcTabDoubleClick.emit({ nativeElement: e, tabItem: tabItem })
  }
  //#endregion

}
