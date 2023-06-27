using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Puntonet.Persons
{
    public partial class PersonAtributteGrid : CustomEditorAttribute
    {
        public const string Key = "Puntonet.Persons.Persons.PersonAtributteGrid";

        public PersonAtributteGrid()
            : base(Key)
        {
        }
    }
}