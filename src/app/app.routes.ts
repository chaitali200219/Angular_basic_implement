import { Routes } from '@angular/router';
import { AddemployeeComponent } from './components/addemployee/addemployee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { StructuralDirectiveComponent } from './components/directive/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './components/directive/attribute-directive/attribute-directive.component';
import { ForComponent } from './components/controlFlow/for/for.component';
import { IfelseComponent } from './components/controlFlow/ifelse/ifelse.component';
import { SwitchComponent } from './components/controlFlow/switch/switch.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { TemplateformComponent } from './components/Forms/templateform/templateform.component';
import { ReactiveformComponent } from './components/Forms/reactiveform/reactiveform.component';
import { GetApiComponent } from './components/api/get-api/get-api.component';
import { PostApiComponent } from './components/api/post-api/post-api.component';

export const routes: Routes = [
    {
        path:'add-emp',
        component:AddemployeeComponent
    },
    {
        path:'data-binding',
        component:DataBindingComponent
    },
    {
        path:'emp-list',
        component:EmployeeListComponent
    },
    {
        path:'structural-dir',
        component:StructuralDirectiveComponent
    },
    {
        path:'attribute-dir',
        component:AttributeDirectiveComponent
    },
    {
        path:'for',
        component:ForComponent
    },
    {
        path:'ifelse',
        component:IfelseComponent
    },
    {
        path:'switch',
        component:SwitchComponent
    },
    {
        path:'pipe',
        component:PipeComponent
    },
    {
        path:'templateform',
        component:TemplateformComponent
    },
    {
        path:'reactiveform',
        component:ReactiveformComponent
    },
    {
        path:'getapi',
        component:GetApiComponent
    },
    {
        path:'postapi',
        component:PostApiComponent
    }
];
