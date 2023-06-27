using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Puntonet.Persons.PersonAtributtes
{
    public partial class PersonClothesEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Puntonet.Persons.PersonAtributtes.PersonClothesEditor";

        public PersonClothesEditorAttribute()
            : base(Key)
        {
        }
    }
}