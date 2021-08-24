import 'package:flutter/material.dart';
import 'package:flutter_travel/util/const.dart';

class ContactScreen extends StatelessWidget {
  const ContactScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        actions: <Widget>[
          IconButton(
            icon: Icon(
              Icons.edit,
              color: Theme.of(context).appBarTheme.iconTheme!.color,
            ),
            onPressed: () {},
          ),
        ],
        title: Padding(
          padding: const EdgeInsets.only(left: 25, top: 10),
          child: Text(
            'My account',
            style: TextStyle(color: Theme.of(context).primaryColor),
          ),
        ),
      ),
      body: ListView(children: [
        Container(
          height: Constants.heightTopBar(context),
          width: double.infinity,
          color: Theme.of(context).appBarTheme.backgroundColor,
          child: Center(
              child: Text(
            "John Doe",
            style:
                TextStyle(color: Theme.of(context).primaryColor, fontSize: 30),
          )),
        ),
        SizedBox(
          height: 40,
        ),
        Divider(),
        contactTextButton(Icons.portrait, 'My profile', context),
        Divider(),
        contactTextButton(Icons.favorite, 'Favorites', context),
        Divider(),
        contactTextButton(Icons.search, 'Saved searches', context),
        Divider(),
        contactTextButton(Icons.question_answer, 'FAQ', context),
        Divider(),
        contactTextButton(Icons.security, 'Security and privacy', context),
        Divider(),
      ]),
    );
  }

  contactTextButton(icons, menuText, context) {
    return TextButton(
      style: TextButton.styleFrom(
          textStyle: const TextStyle(
            fontSize: 18,
          ),
          primary: Constants.primaySwatchLight,
          padding: EdgeInsets.all(25),
          alignment: Alignment.centerLeft),
      onPressed: () {},
      child: Row(
        children: [
          Icon(icons),
          SizedBox(
            width: 15,
          ),
          Text(
            menuText,
            style: TextStyle(
                fontWeight: FontWeight.bold,
                color: Theme.of(context).appBarTheme.backgroundColor),
          ),
        ],
      ),
    );
  }
}
