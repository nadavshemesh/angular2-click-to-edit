import { Component, Input, EventEmitter, ElementRef } from '@angular/core';


@Component({
    selector: 'ndv-drop',
    styles: [`
       #ndv-ic {
        margin-left: 10px;
        color: #d9d9d9;
        }
        .ndv-comp {
            padding:6px;
            border-radius: 3px;
        }
        .active-ndv {
            background-color: #f0f0f0;
            border: 1px solid #d9d9d9;
        }
        input {
            border-radius: 5px;
            box-shadow: none;
            border: 1px solid #dedede;
            min-width: 5px;
        }
        .ndv-buttons {
            background-color: #f0f0f0;
            border: 1px solid #ccc;
            border-top: none;
            border-radius: 0 0 3px 3px;
            box-shadow: 0 3px 6px rgba(111,111,111,0.2);
            outline: none;
            padding: 3px;
            position: absolute;
            margin-left: 6px;
            z-index: 1;
        }
        .ndv-comp:hover {
            border: 1px solid grey;
        }
        .ndv-comp:hover > ndv-ic {
            display:block;
        }

        .ndv-save {
            margin-right:3px;
        }

    `],
    template: `<span class='ndv-comp'>
                    <select *ngIf='show' [(ngModel)]='selectedItem'>
                        <option *ngFor='let option of options'>{{option.name}}</option>
                    </select>
                    <i id='ndv-ic' *ngIf='!show'>✎</i>
                    <span *ngIf='!show' (click)='makeEditable()'>{{option || '-Empty Field-'}}</span>
                </span>
                <div class='ndv-buttons' *ngIf='show'>
                    <button class='btn-x-sm' (click)='callSave()'><i>✔</i></button>
                    <button class='btn-x-sm' (click)='cancelEditable()'><i>✖</i></button>
                </div>`,
    host: {
        "(document: click)": "compareEvent($event)",
        "(click)": "trackEvent($event)"
    },
    outputs: ['save : onSave']
})

export class NdvEditDropComponent {
    @Input() options;
    @Input('selected') selectedOption = {};
    @Input('title') fieldName;
    selectedItem;
    originalOption;
    tracker;
    el: ElementRef;
    show = false;
    save = new EventEmitter;

    constructor(el: ElementRef) {
        this.el = el;
    }
    
    ngOnInit() {
        this.originalOption = this.selectedOption;    //Saves a copy of the original field info.
    }

    makeEditable() {
        if (this.show == false) {
            this.show = true;
        }
    }

    compareEvent(globalEvent) {
        if (this.tracker != globalEvent && this.show) {
            this.cancelEditable();
        }
    }

    trackEvent(newHostEvent) {
        this.tracker = newHostEvent;
    }

    cancelEditable() {
        this.show = false;
        this.selectedOption = this.originalOption;
    }

    callSave() {
        var data = {};  //BUILD OBJ FOR EXPORT.
        data["" + this.fieldName] = this.selectedOption;
        var oldoption = this.selectedOption;
        setTimeout(() => { this.originalOption = oldoption; this.selectedOption = oldoption }, 0);  //Sets the field with the new option;
        this.save.emit(data);
        this.show = false;
        
    }
}