using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Puntonet.Persons.PersonAtributtes
{
    public partial class PersonAtributtesEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Puntonet.Persons.PersonAtributtes.PersonAtributtesEditor";

        public PersonAtributtesEditorAttribute()
            : base(Key)
        {
        }
    }
}