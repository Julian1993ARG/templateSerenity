using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Puntonet.Persons.Persons
{
    public partial class AccesoriesListFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "Puntonet.Persons.Persons.AccesoriesListFormatter";

        public AccesoriesListFormatterAttribute()
            : base(Key)
        {
        }
    }
}