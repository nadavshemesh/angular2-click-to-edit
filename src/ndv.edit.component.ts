import { Component, Input, EventEmitter, ElementRef } from '@angular/core';


@Component({
    selector: 'ndv-edit',
    template: `<span class='ndv-comp'>
                    <input *ngIf='show' type='text' [(ngModel)]='text' />
                    <span *ngIf='!show' (click)='makeEditable()'>{{text || '-Empty Field-'}}</span>
                    <i id='ndv-ic' *ngIf='!show' class='fa fa-pencil'></i>
                </span>
                <div class='ndv-buttons' *ngIf='show'>
                    <button class='btn-x-sm' (click)='callSave()'><i class='fa fa-check'></i></button>
                    <button class='btn-x-sm' (click)='cancelEditable()'><i class='fa fa-remove'></i></button>
                </div>`,
    directives: [],
    host: {
        "(document: click)": "compareEvent($event)",
        "(click)": "trackEvent($event)"
    },
    styles: [`
       #ndv-ic {
        margin-right: 10px;
        color: #d9d9d9;
        },
        .ndv-comp {
            padding:6px;
            border-radius: 3px;
        },
        .active-ndv {
            background-color: #f0f0f0;
            border: 1px solid #d9d9d9;
        },
        .ndv-buttons {
            background-color: #f0f0f0;
            border: 1px solid #ccc;
            border-top: none;
            border-radius: 0 0 3px 3px;
            box-shadow: 0 3px 6px rgba(111,111,111,0.2);
            outline: none;
            padding: 3px;
            position: absolute;
            right: 10;
            z-index: 1;
        }
    `],
    outputs: ['save : onSave']
})

export class NdvEditComponent {
    @Input('placeholder') text;
    @Input('title') fieldName;
    originalText;
    tracker;
    el: ElementRef;
    show = false;
    save = new EventEmitter;

    constructor(el: ElementRef) {
        this.el = el;
    }
    
    ngOnInit() {
        this.originalText = this.text;    //Saves a copy of the original field info.
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
        this.text = this.originalText;
    }

    callSave() {
        var data = {};  //BUILD OBJ FOR EXPORT.
        data["" + this.fieldName] = this.text;
        var oldText = this.text;
        setTimeout(() => { this.originalText = oldText; this.text = oldText }, 0);  //Sets the field with the new text;
        this.save.emit(data);
        this.show = false;
        
    }
}